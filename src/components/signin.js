export const SignIn = () => {
    const [mode, setMode] = useState(0)

    const renderLogin = () => {
        return (<div className="uk-card uk-card-body">
            <h3 class="uk-card-title">Sign In</h3>
            <form>
                <label class="uk-form-label" for="form-stacked-text">Username</label>
                <div class="uk-form-controls">
                    <input class="uk-input" id="form-stacked-text" type="text" placeholder="Username" />
                </div>
                <label class="uk-form-label" for="form-stacked-text">Password</label>
                <div class="uk-form-controls">
                    <input class="uk-input" id="form-stacked-text" type="text" placeholder="Password" />
                </div>
            </form>
            <button class="uk-button uk-button-default" onClick={() => setMode(1)}>Sign Up?</button>
        </div>)
    }
    
    const renderSignUp = () => {
        return (<div className="uk-card uk-card-body">
            <h3 class="uk-card-title">Sign Up</h3>
            <form>
                <label class="uk-form-label" for="form-stacked-text">Email</label>
                <div class="uk-form-controls">
                    <input class="uk-input" id="form-stacked-text" type="text" placeholder="Email" />
                </div>
                <label class="uk-form-label" for="form-stacked-text">Username</label>
                <div class="uk-form-controls">
                    <input class="uk-input" id="form-stacked-text" type="text" placeholder="Username" />
                </div>
                <label class="uk-form-label" for="form-stacked-text">Password</label>
                <div class="uk-form-controls">
                    <input class="uk-input" id="form-stacked-text" type="text" placeholder="Password" />
                </div>
                <label class="uk-form-label" for="form-stacked-text">Confirm Password</label>
                <div class="uk-form-controls">
                    <input class="uk-input" id="form-stacked-text" type="text" placeholder="Confirm Password" />
                </div>
            </form>
            <button class="uk-button uk-button-default" onClick={() => setMode(0)}>Already have an account?</button>
        </div>)
    }

    return (
        mode ? renderSignUp() : renderLogin()
    )
}