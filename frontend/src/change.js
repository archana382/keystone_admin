<div className="addUserContainer">
                <SideBar/>
                <h1>Add User</h1>
                
                <form className="addForm" encType="multipart/form-data" onSubmit={addUserSubmitHandler} >
                    <div className="Name">
                        <input
                            type="name"
                            placeholder="Employee Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                    <div className="UserName">
                        <input
                            type="username"
                            placeholder="Userame"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                    </div>
                    <div className="Email">
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </div>
                    <div className="Department">
                        <input
                            type="department"
                            placeholder="Department"
                            required
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            />
                    </div>
                    <div className="Password">
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>
                    {/* <Button
                        id="addUserBtn"
                        type="submit"
                        // disabled={loading ? true : false}
                        >
                        Add User
                    </Button> */}

                    <input type="submit" value="Add User" className="addBtn"/>
                </form>
                
                {/* <input type="submit" value="Add User" className="addBtn"/> */}
                

            </div>