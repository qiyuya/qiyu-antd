import { FC } from 'react'
import Upload, { UploadProps } from './upload'
import Dragger, { DraggerProps } from './dragger'
import UploadList, { UploadListProps } from './uploadList'

export type IUploadComponent = FC<UploadProps> & {
  dragger: FC<DraggerProps>
  uploadList: FC<UploadListProps>
}

const TransUpload = Upload as IUploadComponent
TransUpload.dragger = Dragger
TransUpload.uploadList = UploadList

export default TransUpload
