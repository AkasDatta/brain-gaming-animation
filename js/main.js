let mGameRenderer = (data = {}, mDOM) => {
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
                            v["el"].innerHTML = ``; //reset

                            //set..
                            let mScr = document.createElement("div");
                            v["el"].appendChild(mScr);

                            //set..
                            let mSet = (mE = document.body) => { //**Have to understand it from sir**
                                mE.innerHTML = `
                                    <div class="scr1 scr-transition">
                                        <img class="scr1-img" src="../assets/1.svg" alt="">

                                        <!-- <img class="scr1-img2" src="../assets/English_Mastery_Quest.svg" alt=""> --!>
                                    </div>
                                `;

                                setTimeout(() => {
                                    const screenElement = mE.querySelector('.scr1');
                                    if (screenElement) {
                                        screenElement.style.opacity = 1;
                                    }
                                }, 0);

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
                            v["el"].innerHTML = ``; //reset

                            //set..
                            let mScr = document.createElement("div");
                            mScr.classList.add('mScr');
                            v["el"].appendChild(mScr);


                            //set..
                            let mSet = (mE = document.body) => {
                                mE.innerHTML = `
                                <div class="scr2 scr-transition">
                                    <img class="scr2-img" src="../assets/2.svg" alt="">
                                </div>
                                
                                `;

                                setTimeout(() => {
                                    const screenElement = mE.querySelector('.scr2');
                                    if (screenElement) {
                                        screenElement.style.opacity = 1;
                                    }
                                }, 0);

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
                            v["el"].innerHTML = ``; //reset

                            //set..
                            let mScr = document.createElement("div");
                            mScr.classList.add('mScr');
                            v["el"].appendChild(mScr);

                            //set..
                            let mSet = (mE = document.body) => {
                                mE.innerHTML = `
                                <div class="scr3 scr-transition scr3-bg-img">
                                   <img class="scr3-img1" src="../assets/rotate_90.svg" alt="">

                                    <img class="scr3-img2" src="/assets/rotate_90_lesser.svg" alt=""> 

                                    <div class="overlay-Loading">
                                        <div class="loading-spans">
                                            <span class="loading-ball"></span>
                                            <span class="loading-text">Loading</span>
                                        </div>
                                    </div>
                                </div>
                                
                                `;

                                setTimeout(() => {
                                    const screenElement = mE.querySelector('.scr3');
                                    if (screenElement) {
                                        screenElement.style.opacity = 1;

                                        // Auto ZoomIn for both img
                                        const img1 = screenElement.querySelector('.scr3-img1');
                                        if (img1) {
                                            img1.style.animation = 'zoomIn1 2s 1s both';
                                        }

                                        const img2 = screenElement.querySelector('.scr3-img2');
                                        if (img2) {
                                            img2.style.animation = 'zoomIn2 2s 2s both';
                                        }

                                        // Overlay Loading:-
                                        const overlayLoading = screenElement.querySelector('.overlay-Loading');
                                        const loadingBall = screenElement.querySelector('.loading-ball');

                                        if (overlayLoading) {
                                            overlayLoading.style.animation = 'zoomInLoading 1s 3s both';

                                            setTimeout(() => {
                                                loadingBall.style.width = '100%';
                                                zoomOutLoading();
                                            }, 3000);

                                            // zoomOutLoading
                                            const zoomOutLoading = () => {
                                                overlayLoading.style.animation = 'zoomOutLoading 1s 3s both';
                                            }
                                        }

                                        // ZoomOut and hide img2
                                        setTimeout(() => {
                                            img2.style.animation = 'zoomOut2 2s 2s both';
                                        }, 5500);

                                        setTimeout(() => {
                                            if (img1) {
                                                img1.style.animation = 'rotate1 2s 1s both';
                                            }
                                        }, 8000);

                                    }
                                }, 0);


                            };
                            mSet(mScr);
                        }
                    },

                    {
                        "name": "Screen 4",
                        "key": "scr_4",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["el"].innerHTML = ``; //reset

                            //set..
                            let mScr = document.createElement("div");
                            mScr.classList.add('mScr');
                            v["el"].appendChild(mScr);


                            //set..
                            let mSet = (mE = document.body) => {
                                mE.innerHTML = `
                                <div class="scr4 scr-transition scr4-bg-img">
                                    <div class="img-container">
                                        <img class="scr4-img1" src="../assets/rotate_90.svg" alt="rotate">
                                    </div>
                                    <div class="scr4-data scr4-data1-dis">
                                        <h1 class="scr4-h1">Game Explanation</h1>
                                        <div>
                                            <h2 class="scr4-h2">countdown</h2>
                                            <img class="scr4-img2" src="../assets/watch.svg" alt="watch">
                                            <div class="scr4-nums">
                                                <span>1</span>
                                                <span>2</span>
                                                <span>3</span>
                                                <span>4</span>
                                            </div>
                                        </div>

                                        <button onclick="scr4Data2Dis()" class="scr4-skip-btn">Skip</button>
                                    </div>

                                    <div class="scr4-data scr4-data2-dis">
                                        <h1 class="scr4-h1">Game Explanation</h1>
                                        <div>
                                            <h2 class="scr4-h2">Answer The MCQ</h2>
                                            <img class="scr4-img2" src="../assets/answer_list.svg" alt="list">
                                        </div>
                                        <button onclick="next" class="scr4-skip-btn">Skip</button>
                                        
                                    </div>
                                </div>
                                
                                `;

                                setTimeout(() => {
                                    const screenElement = mE.querySelector('.scr4');
                                    if (screenElement) {
                                        screenElement.style.opacity = 1;

                                        // const scr4Data = screenElement.querySelector('.scr4-data');
                                        // if (scr4Data) {
                                        //     scr4Data.style.animation = 'scr4-zoomIn2 2s 2s both';
                                        // }

                                        // Skip 
                                        setTimeout(() => {
                                            const scr4Data1 = mE.querySelector(".scr4-data1-dis");
                                            const scr4Data2 = mE.querySelector(".scr4-data2-dis");
                                            // let scr4Data2Dis = () => {
                                                console.log("clicked");
                                                scr4Data1.style.opacity = 0;
                                                scr4Data2.style.opacity = 1;
                                            // }
                                        }, 5000);

                                    }
                                }, 0);

                            };
                            mSet(mScr);
                        }
                    },


                ]
            },

            //set..
            "set": (k, v) => {
                let mList = mDta_main["screens"]["rndr"]["l"];
                let mIdx = mList.findIndex(eF => eF["key"] === k); // Index number of the screen list
                if (mIdx == -1) {
                    throw `err: [k = ${k}] is not available..`;
                    return; //Stop
                }
                //all ok..
                mList[mIdx].set(k, v, mList[mIdx]);
            }

        }

    };

    //set..
    mDiv.innerHTML = "Content";
    // let my_elem_1 = mUtils.my_elem_1(mDiv);



    //mStart..
    let mStart = (mE) => {        //mE is mDiv
        //set..
        mDta_main.screens.set("scr_1", {
            "el": mE,
            "value": {
                //here you can assign your variable based on your requirements..
                "test": "myself anik"
            }
        });

        setTimeout(() => {
            mDta_main.screens.set("scr_2", {
                "el": mE,
                "value": {
                    //here you can assign your variable based on your requirements..


                }
            });
        }, 2000);

        setTimeout(() => {
            mDta_main.screens.set("scr_3", {
                "el": mE,
                "value": {
                    //here you can assign your variable based on your requirements..


                }
            });
        }, 3000);

        setTimeout(() => {
            mDta_main.screens.set("scr_4", {
                "el": mE,
                "value": {
                    //here you can assign your variable based on your requirements..


                }
            });
        }, 14000);


    };
    mStart(mDiv);


};

mGameRenderer({
    "meta": {},
    "data": {
        //add params based on content requirement
        "my_param_1": "",
        "my_param_2": "",


    }
}, document.body);