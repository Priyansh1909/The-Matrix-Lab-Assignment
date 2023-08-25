import { useEffect, useState } from 'react'
import '../App.css'
import Sidebar from './Sidebar'
import Search from './Search'
import Token_Address from './Token_Address'
import Pair_Address from './Pair_Address'

function Home() {

  const [width,setwidth] =useState(window.innerWidth)
  
  
  const [displayToken,set_displayToken] = useState(true)
  const [displayPair,set_displayPair] = useState(false)
  const [searchType,set_searchType] = useState('Token')
  const [tokenData,set_tokenData] = useState({
                                              status:false,
                                              message:"Search To get Data"
                                            })
  const [pairData,set_pairData] = useState({
                                              status:false,
                                              message:"Search To get Data"
                                            })                    


  
  useEffect(() => {

    const handleWindowResize = () => {
      setwidth(window.innerWidth);
    };


    window.addEventListener('resize', handleWindowResize)

    if(width < 601){
      set_displayToken(true)
      set_displayPair(true)
      set_searchType("Both")
    }

    if (width > 602 && (displayToken == true && displayPair == true)){
      set_displayToken(true)
      set_displayPair(false)
    }
  })



  return (
    <>
    <div className='container'>

      <div className='content_box'>

          <div className='left_side'>
              <Sidebar set_displayToken = {set_displayToken} 
                       set_displayPair = {set_displayPair} 
                       displayToken = {displayToken}
                       displayPair = {displayPair}
                       set_searchType = {set_searchType}

              />
          </div> 
          <div className='right_side'>
              <div>
                <Search searchType = {searchType}
                        set_tokenData = {set_tokenData}
                        set_pairData = {set_pairData}
                 />

              </div>
              <div>
                {displayPair?<Pair_Address pairData = {pairData} />:<></>}
                {displayToken?<Token_Address  tokenData = {tokenData}/>:<></>}

            
              </div>
          </div>

      </div>

      <div className='footer'>
        

      </div>
    </div>

    </>
  )
}

export default Home
