import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Avatar from "../../assets/accountBilling.png"
import AccountSwitchBtn from "../../components/accountSwitchBtn/AccountSwitchBtn"
import AccountDelBtn from "../../components/accountDelBtn/AccountDelBtn"

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

        <TabPanel value="2">Billing</TabPanel>

        <TabPanel value="3">Team</TabPanel>
        <TabPanel value="4">Notifications</TabPanel>
        <TabPanel value="5">Security</TabPanel>
      </TabContext>
    </Box>
  );
}
