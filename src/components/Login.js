function Login() {
    return (
        <div>
            <style>
                {`
                .login-container {
                    width: 300px;
                    margin: 20px auto;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    background: #f9f9f9;
                }
                .login-container h2 {
                    text-align: center;
                }
                .login-container label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: bold;
                }
                .login-container input[type="text"],
                .login-container input[type="password"] {
                    width: 100%;
                    padding: 8px;
                    margin-bottom: 15px;
                    border: 1px solid #aaa;
                    border-radius: 4px;
                    box-sizing: border-box;
                }
                .login-container button {
                    width: 100%;
                    padding: 10px;
                    background: #007bff;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                `}
            </style>
            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
export default Login;