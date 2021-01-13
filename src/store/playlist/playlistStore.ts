import {PlaylistType} from '../../types/Playlist'
export  const createPlaylistStore:any = {
        playlists: [],
        setPlaylists: function(playlists:PlaylistType[])  {
            this.playlists = playlists
        },
        addPlaylist: function(playlist:PlaylistType) {
            this.playlists.push(playlist)
        },
        removePlaylist: function(playlistId:string) {
            this.playlists = this.playlists.filter((playlist:PlaylistType) => playlist._id !== playlistId)

        },
        updatePlaylist: function(playlist:PlaylistType) {
            const playlistIdx = this.playlists.findIndex((_playlist:PlaylistType) => _playlist._id === playlist._id)
            this.playlists[playlistIdx] = playlist
        }
}
