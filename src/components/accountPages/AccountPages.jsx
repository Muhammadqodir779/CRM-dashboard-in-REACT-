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



export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


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

          <div className='w-[100%] h-[332px] rounded-3xl shadow-md'>

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
          }}>

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
          }}>

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

          <div className='w-[100%] h-[730px] rounded-3xl shadow-md' style={{
            paddingLeft: "24px",
            paddingTop: "32px",
            paddingRight: "24px"
          }}>

            <h2 className='font-bold text-[17px] text-[#111927]'>Change Plan</h2>

            <p className='text-[#6C737F] text-[14px] font-normal' style={{
              paddingTop: "2px"
            }}>You can upgrade and downgrade whenever you want</p>

            <div>
              <Billing_cards />
            </div>

            <hr className='w-[98%] h-[1px] text-[#6C737F]' style={{
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

        </TabPanel>

        <TabPanel value="4">Notifications</TabPanel>
        <TabPanel value="5">Security</TabPanel>
      </TabContext>
    </Box>
  );
}
