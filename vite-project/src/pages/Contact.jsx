export default function Contact() {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name:</label>
                <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Email Address:</label>
                <input type="email address" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Message:</label>
                <textarea type="text" rows="5" className="form-control" id="exampleInputPassword1" />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}