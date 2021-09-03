export interface SpotifyResponse {
  albums?:    Albums;
  artists?:   Albums;
  tracks?:    Albums;
  playlists?: Albums;
  episodes?:  Albums;
}

export interface Albums {
  href:     string;
  items:    Item[];
  limit:    number;
  next:     null | string;
  offset:   number;
  previous: string;
  total:    number;
}

export interface Item {
  album_type?:             AlbumTypeEnum;
  artists:                Owner[];
  available_markets?:      string[];
  external_urls:           ExternalUrls;
  href:                    string;
  id:                      string;
  images:                  Image[];
  name:                    string;
  release_date?:           Date;
  release_date_precision?: ReleaseDatePrecision;
  total_tracks?:           number;
  type:                    PurpleType;
  uri:                     string;
  audio_preview_url?:      string;
  description?:            string;
  duration_ms?:            number;
  explicit?:               boolean;
  html_description?:       string;
  is_externally_hosted?:   boolean;
  is_playable?:            boolean;
  language?:               Language;
  languages?:              Language[];
  collaborative?:          boolean;
  owner?:                  Owner;
  primary_color?:          null;
  public?:                 null;
  snapshot_id?:            string;
  tracks?:                 Tracks;
  album?:                  Album;
  disc_number?:            number;
  external_ids?:           ExternalIDS;
  is_local?:               boolean;
  popularity?:             number;
  preview_url?:            null | string;
  track_number?:           number;
}

export interface Album {
  album_type:             AlbumTypeEnum;
  artists:                Owner[];
  available_markets:      string[];
  external_urls:          ExternalUrls;
  href:                   string;
  id:                     string;
  images:                 Image[];
  name:                   string;
  release_date:           string;
  release_date_precision: ReleaseDatePrecision;
  total_tracks:           number;
  type:                   AlbumTypeEnum;
  uri:                    string;
}

export enum AlbumTypeEnum {
  Album = "album",
  Compilation = "compilation",
  Single = "single",
}

export interface Owner {
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  name?:         string;
  type:          OwnerType;
  uri:           string;
  display_name?: string;
}

export interface ExternalUrls {
  spotify: string;
}

export enum OwnerType {
  Artist = "artist",
  User = "user",
}

export interface Image {
  height: number | null;
  url:    string;
  width:  number | null;
}

export enum ReleaseDatePrecision {
  Day = "day",
  Year = "year",
}

export interface ExternalIDS {
  isrc: string;
}

export enum Language {
  En = "en",
  EnUS = "en-US",
}

export interface Tracks {
  href:  string;
  total: number;
}

export enum PurpleType {
  Album = "album",
  Episode = "episode",
  Playlist = "playlist",
  Track = "track",
}
