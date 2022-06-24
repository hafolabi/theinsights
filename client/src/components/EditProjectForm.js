import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import { UPDATE_PROJECT } from "../mutations/projectMutations";

export default function EditProjectForm({project}) {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState("");

  const [updateProject] = useMutation(UPDATE_PROJECT,{
    variables: {id: project.id, name, description, status},
    refetchQueries: [{query: GET_PROJECT, variables: {id: project.id}}]
  })

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!name || !description || !status){
      return alert('Please fill out all field')
    }

    updateProject();
  }

  return (
    <div className="mt-5">
      <h3>Update Project Details</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            value={name}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            id="status"
            value={status}
            className="form-select"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="new">Select Status</option>
            <option value="new">Not Started</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
