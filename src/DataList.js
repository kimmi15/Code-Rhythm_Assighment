import React, { useState, useEffect } from "react";
import axios from "axios";

function DataList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const getdDAta = async () => {
    try {
      setLoading(true);
      const resopnse = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(resopnse.data);
      setLoading(false);
    } catch (error) {
      setErr(true);
    }
  };

  const sortfun = () => {
    setData(data.sort((a,b) =>  b.id - a.id ))
  }
  useEffect(() => {
    getdDAta();
  }, []);
  return (
    <div>
      {err ? (
        "Error"
      ) : (
        <div>
          {loading ? (
            <div
              style={{
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              <h1> <button type="button" class="btn btn-primary" onClick={() => sortfun()}>Sort</button> </h1>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                {data.map((ele) => {
                  return (
                    <>
                      <tbody key={ele.id}>
                        <tr>
                          <th scope="row">{ele.id}</th>
                          <td>{ele.name}</td>
                          <td>{ele.username}</td>
                          <td>{ele.email}</td>
                        </tr>
                      </tbody>
                    </>
                  );
                })}
              </table>
            </>
          )}
        </div>
      )}
    </div>
  );
}
export default DataList;
