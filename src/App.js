import React, { useEffect, useState } from 'react';
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from "@syncfusion/ej2-react-popups"


const App = () => {

  const activeMenu = false


  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content={'settings'} position="Top">
              <button type='button' className='text-3xl p-3 
              hover:drop-shadow-xl 
              hover:bg-light-gray
              text-white
              '
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div
              className='
            w-72
            fixed
            sidebar
            dark:bg-secondary-dark-bg
            bg-white
            '>
              SideBar
            </div>
          ) : (
            <div
              className='w-0
            dark:bg-secondary-dark-bg
            '
            >
              DiffSideBar
            </div>
          )}
          <div
            className={
              `dark:bg-main-bg 
            bg-main-bg
            min-h-screen
            w-full ${activeMenu ? `md:ml-72` : `flex-2`}`

            }
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            NavBar
            </div>
          </div>

            <div>
              <Routes>
                {/* DashBoard */}
                <Route path='/' element="Ecommerce"/>
                <Route path="/ecommerce" element="Ecommerce" />

                {/* Pages */}
                <Route path="/orders" element="Orders"/>
                <Route path="/employees" element="Employee"/>
                <Route path="/customers" element="Customers"/>

              {/* Apps */}
              <Route path="/kanban" element="Kanban"/>
              <Route path="/editor" element="Editor"/>
              <Route path="/calender" element="Calender"/>
              <Route path="/color-picker" element="Colorpicker"/>


              {/* Charts */}
              <Route path='/line' element="line" />
              <Route path='/area' element="area" />
              <Route path='/bar' element="bar" />
              <Route path='/pie' element="pie" />
              <Route path='/financial' element="financial" />
              <Route path='/color-mapping' element="ColorMap" />
              <Route path='/pyramid' element="Pyramid" />
              <Route path='/stacked' element="Stacked" />



              </Routes>
            </div>


        </div>
      </BrowserRouter>
    </div>
  )
}

export default App