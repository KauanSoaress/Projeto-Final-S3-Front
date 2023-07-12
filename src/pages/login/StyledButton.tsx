import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
}

export const Button = ({children, onClick }: ButtonProps) => {
    return (
        <>
            <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn"></div>
                    <button className="login100-form-btn" onClick={() => onClick()}>
                        {children}
                    </button>
                </div>
            </div>
        </>
    )
}