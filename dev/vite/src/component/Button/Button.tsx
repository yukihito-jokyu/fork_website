import { Loader2 } from "lucide-react";
import type React from "react";

type ButtonProps = {
	label: string;
	onClick?: () => void;
	color?: "primary" | "secondary";
	size?: "small" | "medium" | "large";
	disabled?: boolean;
	loading?: boolean;
	icon?: React.ReactNode;
};

const getClassName = (
	color: string,
	size: string,
	disabled: boolean,
): string => {
	const base =
		"flex items-center justify-center gap-2 font-semibold rounded transition duration-200";
	const colorClass = disabled
		? "bg-gray-300 text-gray-500 cursor-not-allowed"
		: color === "primary"
			? "bg-blue-500 hover:bg-blue-600 text-white"
			: "bg-gray-500 hover:bg-gray-600 text-white";

	const sizeClass =
		size === "small"
			? "px-2 py-1 text-sm"
			: size === "large"
				? "px-5 py-3 text-lg"
				: "px-3 py-2 text-base";

	return `${base} ${colorClass} ${sizeClass}`;
};

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	color = "primary",
	size = "medium",
	disabled = false,
	loading = false,
	icon,
}) => {
	return (
		<button
			type="button"
			onClick={onClick}
			disabled={disabled || loading}
			className={getClassName(color, size, disabled || loading)}
		>
			{/* スピナー表示 or アイコン表示 */}
			{loading ? (
				<Loader2 className="animate-spin w-4 h-4" />
			) : (
				icon && <span className="w-4 h-4">{icon}</span>
			)}
			{label}
		</button>
	);
};

export default Button;
