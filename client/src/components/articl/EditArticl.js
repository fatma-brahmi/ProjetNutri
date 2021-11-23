import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getArticls, updatedArticl } from '../../JS/actions/articlAction';
import './Articls.css'
const EditArticl = ({ match }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [edit, setEdit] = useState({ photo: "", desc: "", nameNutri: "" });
    const editID = useSelector((state) => state.allArticl.articl);
    useEffect(() => {
      dispatch(getArticls(match.params.id));
    }, [match.params.id]);
    useEffect(() => {
      setEdit({ ...editID });
    }, [editID]);
  
    const handleChange = (e) => {
      e.preventDefault();
  
      setEdit({ ...edit, [e.target.name]: e.target.value });
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const update = {
        nameNutri: data.get("nameNutri"),
        desc: data.get("desc"),
        photo: data.get("photo"),
      };
  
      dispatch(updatedArticl(editID._id, update, history));
      setEdit({ nameNutri: "", desc: "", photo: "" });
    };
    return (
        <div class="body">
          <div class="center" onSubmit={handleSubmit}>
  <h1>Edit Articl</h1>
  <form>
    <div class="inputbox">
      <input onChange={handleChange}name="name" placeholder="NameNutri" value={editID.nameNutri}/>
      <span>Name Nutri</span>
    </div>
    <div class="inputbox">
      <input onChange={handleChange}name="name" placeholder="desc" value={editID.desc}/>
      <span>Description</span>
    </div>
    <div class="inputbox">
      <input onChange={handleChange} name="name" placeholder="Photo" value={editID.photo}/>
      <span> photo</span>
    </div>
    <div class="inputbox">
      <input type="button" value="submit"/>
    </div>
  </form>
</div>
    </div>
    )
}

export default EditArticl
