import { type ButtonHTMLAttributes, type ReactNode } from "react";
import styles from './button.module.css';
import clsx from "clsx";

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'danger';
type ButtonShape = 'rounded' | 'circle';
type ButtonFontWeight = 'normal' | 'bold';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: ButtonVariant;
    shape?: ButtonShape;
    fullWidth?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    iconOnly?: boolean;
    fontWeight?: ButtonFontWeight;
    disabled?: boolean;
    loading?: boolean;
    children?: ReactNode;
}

export const Button = ({
    variant = 'primary',
    shape = 'rounded',
    fontWeight = 'normal',
    disabled,
    leftIcon,
    rightIcon,
    iconOnly,
    loading,
    fullWidth,
    children,
    ...props
}: ButtonProps) => {
    const isDisabled = disabled || loading;

    return (
        <button
            {...props}
            disabled={isDisabled}
            className={clsx(
                styles.button,
                styles[`button--${variant}`],
                styles[`button--${shape}`],
                styles[`button--${fontWeight}`],
                fullWidth && styles['button--fullWidth'],
                iconOnly && styles['button--iconOnly'],
                loading && styles['button--loading'],
            )}
            aria-busy={loading || undefined}
        >
            {loading ? <span>Загрузка...</span> : null}
            {!loading && leftIcon ? <span className={clsx(styles.button__icon, styles.button__left)}>{leftIcon}</span> : null}
            {!loading && !iconOnly ? <span className={styles.button__label}>{children}</span> : null}
            {!loading && rightIcon ? <span className={clsx(styles.button__icon, styles.button__right)}>{rightIcon}</span> : null}
        </button>
    )
}