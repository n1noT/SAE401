import Button from "../ui/Button";
import Card from "../ui/CardMovie";

export default function DesignSystem() {
  return (
  <div className="h-screen">
    {/* // Boutons */}
    <div className="flex flex-col  gap-2 bg-black">
    <Button intent="primary">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" role="img" >
          <path fill="#ffffff" d="m50.395 15.917-4.06 22.168a4.474 4.474 0 0 1-4.141 3.673l-.247.006h-23.74a4.47 4.47 0 0 1-4.328-3.4l-.053-.24-4.38-22.807a.64.64 0 0 0-.513-.51l-.112-.01H5.17v-3.852h3.65a4.47 4.47 0 0 1 4.328 3.4l.053.24 4.38 22.807c.05.264.258.464.514.51l.112.01h23.74c.269 0 .504-.17.596-.416l.03-.11 4.061-22.168 3.761.7z"></path>
          <path fill="#ffffff" d="M28.104 9.448v12.594l-5.061-5.022-2.723 2.703 9.71 9.64 9.708-9.64-2.724-2.703-5.059 5.022V9.448z" ></path>
        </svg>
      </span>
      <span>S'abonner</span>
    </Button>
    <Button intent="secondary">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 85 85" role="img">
          <path fill="#ffffff" d="m73.5 45-57 36.4V8.7z"></path>
        </svg>
      </span>
      <span>Lecture</span>
    </Button>
    <Button intent="infos">
      <span>Plus d'infos</span>
    </Button>
    <Button intent="primary" size="small" className="rounded-sm">
      <span>S'abonner</span>
    </Button>
    <Button intent="primary" size="small" className="rounded-sm p-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="23" height="23"class="UserMenuMyCanal__button__icon___MP5vT"><path fill="#fff" d="m22 7.457-1.876 10.457c-.173.967-.968 1.679-1.913 1.732l-.114.003H7.131c-.95 0-1.77-.666-2-1.603l-.024-.114L3.084 7.174a.3.3 0 0 0-.237-.24l-.052-.005H1.109V5.112h1.686c.95 0 1.77.666 2 1.604l.024.113 2.023 10.758c.023.124.12.219.237.24l.052.005h10.966c.125 0 .233-.08.276-.196l.014-.052 1.875-10.456z"></path><path fill="#fff" d="M13.468 4.347v7.269h-1.767V4.347z"></path><path fill="#fff" d="m15.788 7.945 1.25 1.285-4.453 4.58-4.453-4.58 1.25-1.285 3.203 3.295z"></path></svg>
    </Button>
    <Button intent="secondary" size="small" className="rounded-sm">
      <span>J'en profite</span>
    </Button>
    <Button intent="primary" className="w-fit">
      <span>Découvrir nos offres</span>
    </Button>
    </div>

    {/* // Cartes */}
    <div className="flex flex-col  gap-2 bg-black">
      {/* Liste de petites cartes */}
      <div className="relative pt-[1.5625rem] pb-[1.25rem]">
        
            <div className="box-border" >
              <ul className="relative overflow-x-visible overflow-y-hidden px-1 whitespace-nowrap z-10">
                <Card 
                  bgImage={'./assets/images/myCANAL_16x9_Logotype_MEA_1920x10802-mAwq.webp'}
                  channelImage={'./assets/images/logoCanal.webp'}
                  size="small"
                  />
                  <Card 
                  bgImage={'./assets/images/myCANAL_16x9_Logotype_MEA_1920x10802-mAwq.webp'}
                  channelImage={'./assets/images/logoCanal.webp'}
                  size="small"
                  />     
              </ul> 
        </div>
      </div>
      {/* Liste de grandes cartes */}
      <div className="relative pt-[1.5625rem] pb-[1.25rem]">
        <div className="">
          <div className="block">
            <div className="box-border" >
              <ul className="relative overflow-x-visible overflow-y-hidden px-1 whitespace-nowrap z-10">
                <Card 
                  bgImage={'./assets/images/myCANAL_Jaquette_MEA_600x800--W72.webp'}
                  channelImage={'./assets/images/logoCanal.webp'}
                  size="big"
                  />
                  <Card 
                  bgImage={'./assets/images/myCANAL_Jaquette_MEA_600x800--W72.webp'}
                  channelImage={'./assets/images/logoCanal.webp'}
                  size="big"
                  />
                  
                  
              </ul> 
            </div>
          </div>
        </div>
        
      </div>
    <ul>
      
    </ul>
    </div>
  </div>
);
}
