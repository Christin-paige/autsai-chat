import LoginButton from "../components/LoginButton"

export default function Header () {
    return (
        <div className="flex justify-between p-5 border-b-2">
        <h1 className="text-red-500">Autsai Chat</h1>
        <LoginButton />

        </div>
    )
}