function UserInformation() {
    return (
        <>
            <div className="container p-0">
                <div className="row mt-4">
                    <div className="col-4">
                        <div className="row">
                            <div className="card shadow-lg border" style={{ width: '95%' }}>
                                <div style={{ backgroundColor: '#ccc' }}>
                                    <h5 class="card-title ml-3 mt-2 mb-2">Card title</h5>
                                </div>
                                <div className="card-body ">
                                    <img
                                        src="https://taimienphi.vn/tmp/cf/aut/mAKI-top-anh-dai-dien-dep-chat-1.jpg"
                                        className="d-block mr-auto ml-auto"
                                        style={{ height: '120px', width: '120px', borderRadius: '100% ' }}
                                        alt=""
                                    />
                                    <button href="#" class="btn btn-primary d-block mr-auto ml-auto mt-4">
                                        Go somewhere
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="card shadow-lg border" style={{ width: '95%' }}>
                                <div style={{ backgroundColor: '#ccc' }}>
                                    <h5 class="card-title ml-3 mt-2 mb-2">Card title</h5>
                                </div>
                                <div className="card-body ">
                                    <img
                                        src="https://taimienphi.vn/tmp/cf/aut/mAKI-top-anh-dai-dien-dep-chat-1.jpg"
                                        className="d-block mr-auto ml-auto"
                                        style={{ height: '120px', width: '120px', borderRadius: '100% ' }}
                                        alt=""
                                    />
                                    <button href="#" class="btn btn-primary d-block mr-auto ml-auto mt-4">
                                        Go somewhere
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 ml-0">
                        <div className="card w-100 shadow-lg border">
                            <div style={{ backgroundColor: '#ccc' }}>
                                <h5 class="card-title ml-3 mt-2 mb-2">Card title</h5>
                            </div>

                            <form className="p-3">
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                    <div id="emailHelp" class="form-text">
                                        We'll never share your email with anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">
                                        Password
                                    </label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 d-flex">
                                    <div className="col-6 pl-0">
                                        <label for="exampleInputPassword1" className="form-label">
                                            Password
                                        </label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="col-6 pl-0 pr-0">
                                        <label for="exampleInputPassword1" className="form-label">
                                            Password
                                        </label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* <div className="col">Column</div> */}
                </div>
            </div>
        </>
    );
}

export default UserInformation;
