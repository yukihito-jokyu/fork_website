import { Loader2 } from "lucide-react";
import type React from "react";
import styles from "./Button.module.css"; // ✅ CSS Modulesとしてインポート

type ButtonProps = {
	label: string;
	onClick?: () => void;
	color?: "primary" | "secondary";
	size?: "small" | "medium" | "large";
	variant?: "solid" | "outline" | "ghost";
	disabled?: boolean;
	loading?: boolean;
	icon?: React.ReactNode;
};

const getClassName = (
	color: string,
	size: string,
	disabled: boolean,
	variant: string
): string => {
	const base = styles.btn;
	const colorClass = styles[`btn-${variant}-${color}`];
	const sizeClass = styles[`btn-${size}`];
	const disabledClass = disabled ? styles["btn-disabled"] : "";

	return [base, colorClass, sizeClass, disabledClass].filter(Boolean).join(" ");
};

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	color = "primary",
	size = "medium",
	variant = "solid",
	disabled = false,
	loading = false,
	icon,
}) => {
	return (
		<button
			type="button"
			onClick={onClick}
			disabled={disabled || loading}
			className={getClassName(color, size, disabled || loading, variant)}
		>
			{loading ? (
				<Loader2 className={styles.icon + " " + styles.spin} />
			) : (
				icon && <span className={styles.icon}>{icon}</span>
			)}
			{label}
		</button>
	);
};

export default Button;
