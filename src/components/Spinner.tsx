import { ClipLoader } from "react-spinners"

interface SpinnerProps {
    loading: boolean;
    color: string;
    size: number;
}

const Spinner = ({loading, color, size}: SpinnerProps) => {
    const override: React.CSSProperties = {
        display: 'block',
        margin: '0 auto',
        border: `4px solid ${color}`
    }

    return (
        <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={size}
        />
    )
}

export default Spinner