function Signup() {
    return (
        <div>
            <style>
                {`
                .signup-container {
                    width: 320px;
                    margin: 40px auto;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    background: #f9f9f9;
                }
                .signup-container h2 {
                    text-align: center;
                }
                .signup-container label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: bold;
                }
                .signup-container input[type="text"],
                .signup-container input[type="email"],
                .signup-container input[type="password"] {
                    width: 100%;
                    padding: 8px;
                    margin-bottom: 15px;
                    border: 1px solid #aaa;
                    border-radius: 4px;
                    box-sizing: border-box;
                }
                .signup-container button {
                    width: 100%;
                    padding: 10px;
                    background: #28a745;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                `}
            </style>
            <div className="signup-container">
                <h2>Signup</h2>
                <form>
                    <label htmlFor="username" style={{textAlign:"left"}}>Username</label>
                    <input type="text" id="username" name="username" required />

                    <label htmlFor="email" style={{textAlign:"left"}}>Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password" style={{textAlign:"left"}}>Password</label>
                    <input type="password" id="password" name="password" required />

                    <button type="submit">Signup</button>
                </form>
            </div>
        </div>
    );
}
export default Signup;