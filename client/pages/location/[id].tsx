import { useRouter } from "next/router"

import DetailedLocation from "../../components/DetailedLocation"
import Error from "../_error"

import {
  validateDetailedLocationQuery,
  validateQuery,
} from "../../common/utils"
import { NB_VERSIONS } from "../../common/constants"

const DetailedLocationPage = () => {
  const router = useRouter()

  const locationId = Number(router.query.id)
  const versionId = Number(router.query?.gameVersion)

  if (
    !validateQuery(router.query.id, "location") ||
    !validateDetailedLocationQuery(router.query) ||
    versionId <= 0 ||
    versionId > NB_VERSIONS
  ) {
    return <Error statusCode={404} />
  }

  return <DetailedLocation locationId={locationId} versionId={versionId} />
}

export default DetailedLocationPage
