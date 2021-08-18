import { UnDrawPageNotFound } from '../../asset'
export default function NotFound() {
    return (
        <div className="not_found">
            <img src={UnDrawPageNotFound} alt="Page Not Found" />
            <p>Page Not Found</p>
        </div>
    )
}
