
import axios from "axios";
import {useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
function Blogpost() {

     const [AddDtata, setAddData] = useState({
         title: "",
         image: "",
         discription:""
     });

     const { title, image, discription } = AddDtata;

     const handlechange = (e) => {
       const { name, value } = e.target;
       setAddData({ ...AddDtata, [name]: value });
     };

    
    const handlesubmit = (e) => {
        e.preventDefault();
         axios.post(`${process.env.REACT_APP_BASEURL}/post/createblog`, AddDtata, {
             withCredentials: true,
           })
           .then((res) => {
               console.log(res);
               toast.success(res.data.message)
           })
           .catch((err) => {
             console.log(err);
           });
    }
    
       
    

  return (
    <div>
      <Form className="form-update">
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            className="w-50"
            name="title"
            value={title}
            onChange={handlechange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image"
            className="w-50"
            name="image"
            value={image}
            onChange={handlechange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>discription</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            className="w-50"
            name="discription"
            value={discription}
            onChange={handlechange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handlesubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Blogpost;
