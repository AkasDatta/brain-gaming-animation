let mGameRendrer = (data = {}, mDOM) => {
    //create element..    
    let mDiv = document.createElement("div");
    mDOM.appendChild(mDiv);
    //your root element [----mDiv----]


    //-----do your code-----//
    //utils..
    let mUtils = {
        "my_elem_1": (mE) => {
            let mCard = document.createElement("div");
            mE.appendChild(mCard);
            //set..
            mCard.style.width = "10vh";
            mCard.style.height = "20vh";
            mCard.style.backgroundColor = "green";
            return mCard;
        },
        "my_elem_2": (mE) => { },
        "my_dummy_function": () => { },

    };

    //mDta_main
    let mDta_main = {
        "gVars": {  //Global-Variables
            "my_var_1": "",
        },
        "screens": {  //screens
            "rndr": { //Renderer..
                "l": [ //list..

                    {
                        "name": "Screen 1",
                        "key": "scr_1",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = `<h1>amar name akash</h1>`; //reset
                            //--reset--// [END]

                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            //set..
                            //mScr.innerHTML = thisItem["name"];

                            //set..
                            let mSet = (mE = document.body) => { //**Have to understand it from sir**
                                // console.log(mE);
                                //do your code..
                                mE.innerHTML = thisItem["name"];

                                //set..
                                mE.style.width = "100%";
                                mE.style.height = "100vh";
                                mE.style.backgroundColor = "green";

                            };
                            mSet(mScr);

                        }
                    },

                    {
                        "name": "Screen 2",
                        "key": "scr_2",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset
                            //--reset--// [END]

                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            //set..
                            //mScr.innerHTML = thisItem["name"];


                            //set..
                            let mSet = (mE = document.body) => {
                                //do your code..
                                mE.innerHTML = thisItem["name"];

                                //set..
                                mE.style.width = "100%";
                                mE.style.height = "100vh";
                                mE.style.backgroundColor = "blue";

                            };
                            mSet(mScr);


                        }
                    },

                    {
                        "name": "Screen 3",
                        "key": "scr_3",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset
                            //--reset--// [END]

                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            //set..
                            //mScr.innerHTML = thisItem["name"];


                            //set..
                            let mSet = (mE = document.body) => {
                                //do your code..
                                mE.innerHTML = thisItem["name"];

                                //set..
                                mE.style.width = "100%";
                                mE.style.height = "100vh";
                                mE.style.backgroundColor = "yellow";

                            };
                            mSet(mScr);


                        }
                    },




                ]
            },

            //set..
            "set": (k, v) => {
                let mList = mDta_main["screens"]["rndr"]["l"];
                let mIdx = mList.findIndex(eF => eF["key"] === k);
                if (mIdx == -1) {
                    throw `err: [k = ${k}] is not avail..`;
                    return; //Stop
                }
                //all ok..
                mList[mIdx].set(k, v, mList[mIdx]);

            }

        }

    };

    //set..
    mDiv.innerHTML = "Content";
    //let my_elem_1 = mUtils.my_elem_1(mDiv);



    //mStart..
    let mStart = (mE) => {
        //set..
        mDta_main.screens.set("scr_1", {
            "e": mE,
            "value": {
                //here you can assign your variable based on your requirements..

            }
        });

        setTimeout(() => {
            mDta_main.screens.set("scr_2", {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..


                }
            });
        }, 2000);

        setTimeout(() => {
            mDta_main.screens.set("scr_3", {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..


                }
            });
        }, 3000);


    };
    mStart(mDiv);


};

mGameRendrer({
    "meta": {},
    "data": {
        //add params based on content requirement
        "my_param_1": "",
        "my_param_2": "",


    }
}, document.body);