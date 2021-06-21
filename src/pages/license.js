import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import aesjs from "aes-js";
export default function License(props) {
  const history = useHistory();
  useEffect(() => {
    window.close();
  }, []);
  function onFileChange(e) {
    var file = document.getElementById("file").files[0];
    var fileContent = new FileReader();
    if (file.name.split(".")[1] === "lal") {
      fileContent.onload = function (e) {
        var encodedDate = e.target.result;
        if (/[0-9A-Fa-f]{6}/g.test(encodedDate)) {
          window.localStorage.setItem("date", encodedDate);
          history.push("/");
        } else {
          alert("file content is not valid");
        }
      };
      fileContent.readAsText(file, "UTF-8");
    } else {
      alert("File type not allowed");
      document.getElementById("file").value = null;
    }
  }
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center  dd bg-gray-900">
      <div className="text-white text-2xl ">Please Uploud the license...</div>
      <input
        type="file"
        id="file"
        className="text-white mt-24"
        onChange={(e) => onFileChange(e)}
      />
    </div>
  );
}
