import {Album} from './album';

export interface Track{
  id: string;
  artistName: string;
  name: string;
  previewUrl: string
  album: Album;
}