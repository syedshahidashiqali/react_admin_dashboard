import "./NewUser.css";

function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserFormItem">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="John" />
                </div>
                <div className="newUserFormItem">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="John Smith" />
                </div>
                <div className="newUserFormItem">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="john@gmail.com" />
                </div>
                <div className="newUserFormItem">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newUserFormItem">
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder="+1 123 456 67" />
                </div>
                <div className="newUserFormItem">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder="New York | USA" />
                </div>
                <div className="newUserFormItem">
                    <label htmlFor="">Gender</label>
                    <div className="newUserFormGender">
                        <input id="male" type="radio" name="gender" value="male" />
                        <label htmlFor="male">Male</label>
                        <input id="female" type="radio" name="gender" value="female" />
                        <label htmlFor="female">Female</label>
                        <input id="other" type="radio" name="gender" value="others" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUserFormItem">
                    <label htmlFor="">Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <button className="newUserCreateButton">Create</button>
            </form>
        </div>
    )
};

export default NewUser;
