import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Avatar from "../../assets/accountBilling.png"
import AccountSwitchBtn from "../../components/accountSwitchBtn/AccountSwitchBtn"
import AccountDelBtn from "../../components/accountDelBtn/AccountDelBtn"
import Billing_cards from "../../components/billingCards/BillingCards"
import { MdEdit } from "react-icons/md";
import AccountBillingTable from "../../components/accountBillingTable/AccountBillingTable"
import { Link } from 'react-router-dom';
import setting from "../../assets/auth_setting.png"
import AccountBillingBtn from "../../components/accountBillingBtn/AccountBillingBtn"
import AccountTeamBtn from "../../components/accountTeamBtn/AccountTeamBtn"
import AccountTeamAvatar1 from "../../assets/accountTeamAvatar1.png"
import AccountTeamAvatar2 from "../../assets/accountTeamAvatar2.png"
import { BsThreeDots } from "react-icons/bs";
import 'aos/dist/aos.css';
import { FaArrowRight } from "react-icons/fa";
import AccountSecurityTable from "../../components/accountSecurityTable/AccountSecurityTable"



export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const notifications_title = [
    { title: "Product updates", p: "News, announcements, and product updates." },
    { title: "Security updates", p: "Important notifications about your account security." },
    { title: "Security updates", p: "Important notifications about your account security." },
  ];


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="General" value="1" />
            <Tab label="Billing" value="2" />
            <Tab label="Team" value="3" />
            <Tab label="Notifications" value="4" />
            <Tab label="Security" value="5" />
          </TabList>
        </Box>

        <TabPanel value="1">

          <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className='w-[100%] h-[332px] rounded-3xl shadow-md'>

            <h3 className='font-bold text-[17px] text-[#111927]' style={{
              padding: "32px 24px"
            }}>Basic details</h3>

            <img src={Avatar} alt="img" className='' style={{
              paddingLeft: "460px",
              marginTop: "-70px"
            }} />

            <p className='font-semibold text-[13px] text-[#111927]' style={{
              paddingLeft: "605px",
              marginTop: "-65px"
            }}>Change</p>

            <input type="text" placeholder='Full Name' className='w-[680px] h-[55px] rounded-lg border border-gray-400' style={{
              padding: "8px",
              marginLeft: "460px",
              marginTop: "74px"
            }} />

            <p className='font-semibold text-[13px] text-[#111927]' style={{
              paddingLeft: "1160px",
              marginTop: "-35px"
            }}>Save</p>

            <input type="text" placeholder='Email Address*' className='w-[680px] h-[55px] rounded-lg border border-gray-400' style={{
              padding: "8px",
              marginLeft: "460px",
              marginTop: "40px"
            }} />

            <p className='font-semibold text-[13px] text-[#111927]' style={{
              paddingLeft: "1160px",
              marginTop: "-35px"
            }}>Edit</p>

          </div>

          <div className='w-[100%] h-[223px] rounded-3xl shadow-md' style={{
            marginTop: "32px"
          }}
            data-aos="zoom-in-right"
          >

            <h3 className='font-bold text-[17px] text-[#111927]' style={{
              padding: "32px 24px"
            }}>Public profile</h3>

            <div className='account_accordion'>

              <h3 className='font-medium text-[16px] text-[#111927]' style={{
                paddingLeft: "460px",
                marginTop: "-55px"
              }}>Make Contact Info Public</h3>

              <p className='font-normal text-[#6C737F] text-[14px]' style={{
                marginTop: "10px",
                paddingLeft: "460px"
              }}>Means that anyone viewing your profile will be able to see your contacts details.</p>

              <div className="switch_btn" style={{
                paddingLeft: "1100px",
                marginTop: "-50px"
              }}>

                <AccountSwitchBtn />

              </div>

            </div>

            <div className='account_accordion'>

              <h3 className='font-medium text-[16px] text-[#111927]' style={{
                paddingLeft: "460px",
                marginTop: "52px"
              }}>Available to hire</h3>

              <p className='font-normal text-[#6C737F] text-[14px]' style={{
                marginTop: "10px",
                paddingLeft: "460px"
              }}>Toggling this will let your teammates know that you are available for acquiring new projects.</p>

              <div className="switch_btn" style={{
                paddingLeft: "1100px",
                marginTop: "-45px"
              }}>

                <AccountSwitchBtn />

              </div>

            </div>

          </div>

          <div className='w-[100%] h-[155px] rounded-3xl shadow-md' style={{
            marginTop: "32px"
          }}
          >

            <h3 className='font-bold text-[17px] text-[#111927]' style={{
              padding: "32px 24px"
            }}>Delete Account</h3>

            <h3 className='font-medium text-[16px] text-[#111927]' style={{
              paddingLeft: "460px",
              marginTop: "-55px"
            }}>
              Delete your account and all of your source data. This is irreversible.
            </h3>

            <div className="account_delete_btn" style={{
              paddingLeft: "460px",
              paddingTop: "24px"
            }}>

              <AccountDelBtn />

            </div>

          </div>

        </TabPanel>

        <TabPanel value="2">

          <div data-aos="zoom-in" className='w-[100%] h-[730px] rounded-3xl shadow-md' style={{
            paddingLeft: "24px",
            paddingTop: "32px",
            paddingRight: "24px"
          }}>

            <h2 className='font-bold text-[17px] text-[#111927]'>Change Plan</h2>

            <p className='text-[#6C737F] text-[14px] font-normal' style={{
              paddingTop: "2px"
            }}>You can upgrade and downgrade whenever you want</p>

            <div data-aos="fade-down">
              <Billing_cards />
            </div>

            <hr className='w-[98%] h-[1px] text-[#F2F4F7]' style={{
              marginTop: "24px"
            }} />

            <div className='flex justify-between' style={{
              marginTop: "35px"
            }}>

              <h2 className='font-bold text-[17px] text-[#111927]'>Billing details</h2>

              <h2 className='text-[14px] text-[#111927] font-semibold flex items-center gap-1'>
                <MdEdit style={{
                  fontSize: "18px"
                }} />
                Edit
              </h2>

            </div>

            <div style={{
              marginTop: "35px"
            }}>
              <AccountBillingTable />
            </div>

            <div className='flex items-center w-[100%]' style={{
              marginTop: "26px"
            }}>

              <p className='text-[14px] text-[#6C737F] font-normal'>We cannot refund once you purchased a subscription, but you can always</p>

              <Link className='text-[#6366F1] text-[14px]' style={{
                paddingLeft: "6px"
              }}>Cancel</Link>

            </div>

            <img src={setting} alt="img" style={{
              marginLeft: "1100px",
              marginTop: "-50px"
            }} />

            <div style={{
              marginLeft: "960px",
              marginTop: "-30px"
            }}>

              <AccountBillingBtn />

            </div>

          </div>

          <div className='w-[100%] h-[320px] rounded-3xl shadow-lg' style={{
            marginTop: "32px",
            padding: "32px 24px"
          }}>
            <div>

              <h2 className='font-bold text-[#111927] text-[17px]'>Invoice history</h2>

              <p className='text-[#6C737F] text-[14px] font-normal'>You can view and download all your previous invoices here. If you’ve just made a payment, it may take a few hours for it to appear in the table below.</p>

            </div>

            <div style={{
              marginTop: "20px"
            }}>

              <AccountBillingTable />

            </div>

          </div>

        </TabPanel>

        <TabPanel value="3">

          <div data-aos="flip-up">

            <div className='w-[100%] h-[110px] rounded-3xl shadow-lg' style={{
              marginTop: "25px",
              padding: "32px 24px"
            }}>

              <h2 className='font-bold text-[17px] text-[#111927]'>Invite members</h2>

              <p className='text-[#6C737F] text-[14px] font-normal'>You currently pay for 2 Editor Seats.</p>

              <div className='flex items-center gap-[10px]' style={{
                marginTop: "-50px"
              }}>

                <input type="email" placeholder='Email address' className='w-[722px] h-[54px] text-[#6C737F] border  rounded-2xl' style={{
                  paddingLeft: "12px",
                  marginLeft: "470px",
                }} />

                <AccountTeamBtn />

              </div>

            </div>

            <div className='flex gap-[760px] w-[100%]' style={{
              marginLeft: "24px",
              marginTop: "24px"
            }}>

              <h2 className='font-semibold text-[12px] text-[#2F3746]'>MEMBER</h2>

              <h2 className='font-semibold text-[12px] text-[#2F3746]'>ROLE</h2>

            </div>

            <div className='flex flex-col rounded-3xl shadow-lg w-[100%] h-[180px]' style={{
              marginTop: "24px",
              padding: "24px"
            }}>

              <div>

                <img src={AccountTeamAvatar1} alt="avatar" />

                <h3 className='text-[14px] text-[#111927] font-medium' style={{
                  paddingLeft: "58px",
                  marginTop: "-40px"
                }}>Cao Yu</h3>

                <p className='text-[14px] text-[#6C737F] font-normal' style={{
                  paddingLeft: "58px"
                }}>cao.yu@devias.io</p>

                <button className='bg-[#6366F11F] text-[#4338CA] text-[12px] font-semibold rounded-3xl' style={{
                  padding: "10px",
                  marginLeft: "810px",
                  transform: "translateY(-40px)"
                }}>OWNER</button>

                <BsThreeDots style={{
                  fontSize: "24px",
                  position: "absolute",
                  left: "1420px",
                  top: "500px",
                  cursor: "pointer"
                }} />

              </div>

              <hr style={{
                width: "100%",
                height: "1px",
                color: "#F2F4F7",
                marginTop: "-20px"
              }} />

              <div style={{
                marginTop: "24px"
              }}>

                <img src={AccountTeamAvatar2} alt="avatar" />

                <h3 className='text-[14px] text-[#111927] font-medium' style={{
                  paddingLeft: "58px",
                  marginTop: "-40px"
                }}>Siegbert Gottfried</h3>

                <p className='text-[14px] text-[#6C737F] font-normal' style={{
                  paddingLeft: "58px"
                }}>siegbert.gottfried@devias.io</p>

                <h4 className='font-normal text-[14px] text-[#111927]' style={{
                  paddingLeft: "815px",
                  marginTop: "-25px"
                }}>Standard</h4>

                <BsThreeDots style={{
                  fontSize: "24px",
                  position: "absolute",
                  left: "1420px",
                  top: "590px",
                  cursor: "pointer"
                }} />

              </div>

            </div>

          </div>

        </TabPanel>

        <TabPanel value="4">
          <div
            className='w-[100%] h-[330px] rounded-3xl shadow-lg'
            data-aos="flip-left"
            style={{
              padding: "24px",
              marginTop: "24px"
            }}
          >
            <div className='flex flex-col gap-[188px]'>
              <h2 className='font-bold text-[17px] text-[#111927]'>Email</h2>
              <h2 className='font-bold text-[17px] text-[#111927]'>Phone notifications</h2>
            </div>

            <div style={{
              marginLeft: "466px",
              marginTop: "-325px"
            }}>
              {notifications_title.map((item, index) => (
                <div key={index} className=''>
                  <h2 className='font-medium text-[#111927] text-[16px]' style={{
                    paddingTop: "60px"
                  }}>{item.title}</h2>
                  <p className='text-[#6C737F] text-[14px] font-normal' style={{
                    paddingTop: "10px"
                  }}>{item.p}</p>
                </div>
              ))}
            </div>

            <hr style={{
              width: "60%",
              height: "1px",
              color: "#F2F4F7",
              marginLeft: "466px",
              marginTop: "-200px"
            }} />

            <hr style={{
              width: "100%",
              height: "1px",
              color: "#F2F4F7",
              marginTop: "120px"
            }} />

            <div className='flex flex-col gap-[66px]' style={{
              marginLeft: "1111px",
              marginTop: "-180px"
            }}>
              <AccountSwitchBtn />
              <AccountSwitchBtn />
              <AccountSwitchBtn />
            </div>

            <img src={setting} alt="image" style={{
              marginLeft: "1110px",
              marginTop: "73px",
              cursor: "pointer"
            }} />
          </div>
        </TabPanel>

        <TabPanel value="5">

          <div>

            <div className='w-[100%] h-[120px] rounded-3xl shadow-lg' style={{
              padding: "32px 24px",
              marginTop: "24px"
            }}>

              <h2 className='font-bold text-[#111927] text-[17px]'>Change password</h2>

              <input type="password" placeholder='Thebestpasswordever123#' className='w-[54%] h-[55px] rounded-xl border text-[#11192761]' style={{
                padding: "10px",
                marginLeft: "466px",
                marginTop: "-20px"
              }} />

              <p className='text-[#6366F1] text-[14px] font-semibold' style={{
                marginLeft: "1142px",
                marginTop: "-40px",
                cursor: "pointer"
              }}>Edit</p>

            </div>

            <div className='w-[100%] h-[322px] rounded-3xl shadow-lg'
              style={{
                padding: "32px 24px",
                marginTop: "32px"
              }}>

              <h2 className='font-bold text-[#111927] text-[17px]'>Multi Factor Authentication</h2>

              <div className='flex gap-[32px]' style={{
                marginTop: "16px"
              }}>

                <div className='w-[556px] h-[222px] rounded-2xl shadow-md' style={{
                  padding: "35px 25px"
                }}>

                  <p className='font-normal text-[14px] text-[#F04438]'>Off</p>

                  <h3 className='font-medium text-[#111927] text-[14px]' style={{
                    paddingTop: "14px"
                  }}>Authenticator App</h3>

                  <p className='text-[#6C737F] text-[14px] font-normal' style={{
                    paddingTop: "14px"
                  }}>Use an authenticator app to generate one time security codes.</p>

                  <button className='border rounded-2xl flex items-center gap-[6px] text-[#6366F1]' style={{
                    padding: "8px 20px",
                    marginTop: "35px"
                  }}>Set Up<FaArrowRight />
                  </button>

                </div>

                <div className='w-[556px] h-[222px] rounded-2xl shadow-md' style={{
                  padding: "35px 25px"
                }}>

                  <p className='font-normal text-[14px] text-[#F04438]'>Off</p>

                  <h3 className='font-medium text-[#111927] text-[14px]' style={{
                    paddingTop: "14px"
                  }}>Text Message</h3>

                  <p className='text-[#6C737F] text-[14px] font-normal' style={{
                    paddingTop: "14px"
                  }}>Use your mobile phone to receive security codes via SMS.</p>

                  <button className='border rounded-2xl flex items-center gap-[6px] text-[#6366F1]' style={{
                    padding: "8px 20px",
                    marginTop: "35px"
                  }}>Set Up<FaArrowRight />
                  </button>

                </div>

              </div>

            </div>

            <div>

              <div className='w-[100%] h-[100px] shadow-lg rounded-xl flex flex-col gap-[2px]' style={{
                padding: "32px 24px",
                marginTop: "32px"
              }}>

                <h2 className='font-bold text-[17px] text-[#111927]'>Login history</h2>

                <p className='text-[#6C737F] text-[14px] font-normal'>Your recent login activity</p>

              </div>

              {/* <div className='flex' style={{
                marginLeft: "24px",
                marginTop: "12px"
              }}>

                <h2 className='text-[#2F3746] text-[12px] font-semibold'>Login type</h2>
                <h2 className='text-[#2F3746] text-[12px] font-semibold' style={{
                  paddingLeft: "438px"
                }}>IP Address</h2>

                <h2 className='text-[#2F3746] text-[12px] font-semibold' style={{
                  paddingLeft: "210px"
                }}>Client</h2>

              </div> */}

              <div style={{
                marginTop: "32px"
              }}>

                <AccountSecurityTable />

              </div>

            </div>

          </div>

        </TabPanel>

      </TabContext>
    </Box>
  );
}
