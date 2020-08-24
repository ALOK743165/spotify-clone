import React from "react"
import  "./Sidebar.css"
import SidebarOption from "./SidebarOptions";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './Datalayer';

function Sidebar(){
    const [{playlists}, dispatch] = useDataLayerValue();

    return(
        <div className="sidebar">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Spotify_logo_horizontal_black.jpg/1280px-Spotify_logo_horizontal_black.jpg"
                alt=""
                className="sidebar-logo"
            />
            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
            <br />
            <strong className="sidebar__title">PLAYLIST</strong>
            <hr />

            {playlists?.items?.map(playlists => (
                <SidebarOption title={playlists.name}/>
                
            ))}
        </div>
    )
}

export default Sidebar;