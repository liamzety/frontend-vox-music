import {PlaylistType} from '../../types/Playlist'
export  const createPlaylistStore:any = {
        playlists: [],
        setPlaylists: function(temps:PlaylistType[])  {
            this.playlists = temps
        },
        addPlaylist: function(temp:PlaylistType) {
            this.playlists.push(temp)
        },
        removePlaylist: function(tempId:string) {
            this.playlists = this.playlists.filter((playlist:PlaylistType) => playlist._id !== tempId)

        },
        updatePlaylist: function(temp:PlaylistType) {
            const tempIdx = this.playlists.findIndex((playlist:PlaylistType) => playlist._id === temp._id)
            this.playlists[tempIdx] = temp
        }
}
