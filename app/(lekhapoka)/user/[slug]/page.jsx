"use client";
import Loading from "@/components/common/loading";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState, useRef, useMemo } from "react";
import JoditEditor from 'jodit-react';
import { components } from 'react-select';
import Select from 'react-select';


import UserDetails from '@/components/user/userdetails'
import Sidebar from "@/components/sidebar/Sidebar";
import { fetchData } from '@/app/api/api'




export default function Home(context) {
  const { slug } = context.params;

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
  const [userToken, setUserToken] = useState("")
  const [userPost, setUserPost] = useState([])




  //  category fetch
  const [category, setCategory] = useState([]);
  const [writers, setWriters] = useState([]);



  useEffect(() => {

    fetch("http://192.168.88.248:3002/writers")
      .then(response => response.json())
      .then(data => {
        setWriters(data);

      })
      .catch(error => console.error("Error fetching data:", error));

    fetch("http://192.168.88.248:3002/categories")
      .then(response => response.json())
      .then(data => {
        setCategory(data);


      })
      .catch(error => console.error("Error fetching data:", error)).finally(setIsLoading(false));



    // user post

    
    // fetch(`http://192.168.88.248:3002/postsbyuser/${slug}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setUserPost(data.object);


    //   })
    //   .catch(error => console.error("Error fetching data:", error)).finally(setIsLoading(false));

    async function fetchDataAsync() {
      try {
        const result = await fetchData(`http://192.168.88.248:3002/postsbyuser/${slug}`);
        console.log('result        user profile  ->>>>>>>>>>>>>>>>', result.object)
        setUserPost(result.object);
        console.log('result        user USER POST  ->>>>>>>>>>>>>>>>', userPost)
      } catch (error) {
        alert('Error fetching user post')
      }
    }

    fetchDataAsync();
  }, []);


  useEffect(() => {
    setStatus(localStorage.getItem("status") || "");

  }, [status]);

  useEffect(() => {
    setUsername(localStorage.getItem('name') || '');
    setUserToken(localStorage.getItem('token') || '')
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

    const formData = new FormData();
    formData.append('file', null);
    formData.append('category', selectedOption?.label);
    formData.append('cat_id', selectedOption?.value);
    formData.append('writer', selectedOption?.label);
    formData.append('writer_id', selectedOption?.value);
    formData.append('title', title);

    formData.append('content', content);
    formData.append('rating', 0);
    formData.append('status', false);
    formData.append('uploaded_by', userUuid);



    try {
      const response = await fetch(`http://192.168.88.248:3002/posts`, {
        method: 'POST',
        headers: {
          // 'x-access-token': userToken, 
          // 'x-user-channel': 'apps'
        },
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        console.log('sucessfully sent:', data);
        alert('Send Data Sucessfully')

      } else {
        console.error('Failed to update profile:', response.statusText);
        alert(response.statusText)
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert(error)
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
                  {userPost.length &&
                    userPost.map((post, index) => (
                      <>
                        <div>
                          <div className="pb-3 pt-10">
                            <div className="text-3xl text-yellow-400 font-bold">{post.title}</div>
                          </div>
                          <div className="pb-4">
                            <div className="text-xl text-gray-800 font-semibold ">{post.writer}</div>
                          </div>
                          <div className="pb-3">
                            <div
                              className="text-[16px] text-gray-500"
                              dangerouslySetInnerHTML={{ __html: post.content }}/>
                          </div>

                        </div>

                      </>
                    ))}

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
