"use client";
import Loading from "@/components/common/loading";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState, useRef, useMemo } from "react";
import JoditEditor from 'jodit-react';
import Dropdown from 'react-dropdown';
import { components } from 'react-select';
import Select from 'react-select';


import UserDetails from '@/components/user/userdetails'
import Sidebar from "@/components/sidebar/Sidebar";




// const options = [
//   { value: 'one', label: 'One' },
//   { value: 'two', label: 'Two', className: 'myOptionClassName' },

// ];



export default function Home() {
  // --------------- editor ----------

  const editor = useRef(null);
  const [content, setContent] = useState('');


  // ---------------------

  //--------------- catagory -----------------
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedWriter, setSelectedWriter] = useState(null);

  const categoryhandleChange = (selected) => {
    setSelectedOption(selected); // Selected option object
  };


  const writerhandleChange = (selected) => {
    setSelectedWriter(selected); // Selected option object
  };


  const customStyles = {
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#fff', // Set background color to white
      border: '1px solid #ccc', // Add optional border
    }),
    // You can style other elements like control, option, etc. here
  };

  // --------------------------------------------

  const router = useRouter();

  const [data, setData] = useState(null);
  const [title, setTitle] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [status, setStatus] = useState("");
  const [username, setUsername] = useState("");
  const [userUuid, setUserUuid] = useState("");




  //  category fetch
  const [category, setCategory] = useState([]);
  const [writers, setWriters] = useState([]);



  useEffect(() => {

    fetch("http://192.168.88.248:3002/writers")
    .then(response => response.json())
    .then(data => {
      setWriters(data);

      setIsLoading(false);
    })
    .catch(error => console.error("Error fetching data:", error));

    fetch("http://192.168.88.248:3002/categories")
      .then(response => response.json())
      .then(data => {
        setCategory(data);

        setIsLoading(false);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);


  useEffect(() => {
    setStatus(localStorage.getItem("status") || "");

  }, [status]);

  useEffect(() => {
    setUsername(localStorage.getItem('name') || '');
    setUserUuid(localStorage.getItem('uuid') || '')
  }, []);

  // Drop down category
  let Categoryoptions = []
  let writersOptions = []
  for (let i = 0; i < category.length; i++) {
    let data = { value: category[i]._id, label: category[i].title }
    // console.log('---data -----------'. data)
    Categoryoptions.push(data)
  }

  for (let i = 0; i < writers.length; i++) {
    let data = { value: writers[i]._id, label: writers[i].name }
    // console.log('---data -----------'. data)
    writersOptions.push(data)
  }




  const handleTitle = (e) => {
    setTitle(e.target.value);
  };


 const handleSubmit = async () => {

      
         try {
                const response = await axios.post(`http://192.168.88.248:3002/posts`, {
                  file: null,
                  category: selectedOption?.label,
                  cat_id: selectedOption?.value,
                  writer: selectedOption?.label,
                  writer_id: selectedOption?.value,
                  title:title,
                  content:content,
                  rating: 1,
                  status: false,
                  uploaded_by: username,

                });
                // Handle successful signup response (e.g., redirect)
                console.error('sucessful post ---------------------------------------');
               alert('Sucessfully submitted')
            } catch (error) {
                console.error('post error:', error);
                alert(error)
                // Handle signup error (e.g., display error message)
            }
        
    };



  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        {status && (
          <div className="pt-[110px]">
            <div>
              <div>
                <img
                  className="w-full h-[315px]"
                  src="/images/usericons/userbanner.svg"
                  alt="banner"
                />
              </div>
              <div className="grid place-content-center items-center -mt-[110px]">
                <div className="" >
                  <img
                    className=""
                    src="/images/usericons/userprofile.svg"
                  />

                </div>
                <div className="grid place-content-center space-y-4">
                  <h1 className="text-[#FCD200] text-[35px] pl-[60px]  items-center" >{username}</h1>
                  <h1 className="text-[#595D5B] text-[22px] pl-[120px] items-center" >কবি</h1>
                  <h1 className="text-[#737373] text-[22px]  items-center" >
                    এতোটা গ্রহণ এতো প্রশংসা প্রয়োজন নেই<br />
                    কিছুটা আঘাত অবহেলা চাই প্রত্যাখান।</h1>
                </div>
                <div className="flex flex-row text-[#484848] text-[28px] divide-x-2 space-x-3 pt-4">
                  <div className="">
                    <h1>১৬</h1>
                    <h1>পোস্ট</h1>
                  </div>

                  <div className="pl-2">
                    <h1>১০১২</h1>
                    <h1>ফলোয়ার</h1>
                  </div>
                  <div className="pl-2">
                    <h1>৩১২</h1>
                    <h1>ফলোয়িং</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row pt-[80px]">
              <div className="w-3/4 pl-[193px]">
                <div className="pr-6 space-y-4">
                  <input
                    onChange={handleTitle}
                    value={title}
                    className="w-full h-[62px] p-4 bg-[#FCF7E8] border-solid border-slate-800 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="Post Title"
                    required
                  />

                  <Select
                    value={selectedOption}
                    onChange={categoryhandleChange}
                    styles={customStyles}
                    options={Categoryoptions}
                  />

                  <Select
                    value={selectedWriter}
                    onChange={writerhandleChange}
                    styles={customStyles}
                    options={writersOptions}
                  />
                  <JoditEditor
                    ref={editor}
                    value={content}
                    //config={}
                    //tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => { console.log(content) }}
                  />
                  <button
                    onClick={handleSubmit}
                    className="w-[219px] h-[43px] bg-[#F9A106] text-[16px] text-white"
                  >পোস্ট করুন</button>
                  <hr class="my-4 border-gray-200" />
                </div>

                <div>

                </div>

              </div>
              <div className="w-1/4 flex flex-col">
                <UserDetails />
                <Sidebar />
              </div>
            </div>

          </div>
        )}
        {/* {!status && router.push(`/unauthorizeduser`)} */}
      </>
    );
  }
}
