const namespace = 'claims'

export const READ_CLAIMS_REQUESTED = `${namespace}/READ_CLAIMS_REQUESTED`
export const READ_CLAIMS_SUCCEEDED = `${namespace}/READ_CLAIMS_SUCCEEDED`
export const READ_CLAIMS_FAILED = `${namespace}/READ_CLAIMS_FAILED`

export const READ = [READ_CLAIMS_REQUESTED, READ_CLAIMS_SUCCEEDED, READ_CLAIMS_FAILED]
