export default function SingIn(){
    return (
        
        <div>
            <h1>Sing in</h1>
            <form>
                <div>
                    <label>
                        FirstName
                        <input type="text" name="firstname" placeholder="firstname"/>
                    </label>
                    <br/>
                    <label>
                        LastName
                        <input type="text" name="lastname" placeholder="lastname"/>
                    </label>
                    <br/>
                    <label>
                        Password
                        <input type="text" name="password" placeholder="password"/>
                    </label>
                </div>
                <button>Sing In</button>
            </form>
        </div>
    )
}