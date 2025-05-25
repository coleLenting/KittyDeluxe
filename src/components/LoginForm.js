import React from 'react';

function LoginForm({ handleLogin, username, setUsername, password, setPassword }) {
    return (
        <div class = "container">
            <h1>Welcome To KittyDeluxe</h1>
            <form>
                <div class="form-group row">
                <input 
                    class="form-control"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                </div>
                <div class="form-group row">
                <input
                    class= "form-control"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <br/>
                <div class = "row">
                    <button
                        class = "btn btn-primary col-lg-2 mx-auto"
                        onClick={handleLogin}>
                            Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
