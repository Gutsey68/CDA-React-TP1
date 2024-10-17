type ButtonProps = {
    text: string;
    props?: string;
};

function Button({ text, ...props }: ButtonProps) {
    return (
        <button {...props} className="bg-neutral-800 text-white font-semibold py-2 px-5 rounded-lg hover:bg-yellow-500 hover:text-black">
            {text}
        </button>
    );
}
export default Button;
