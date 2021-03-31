/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncSimpleExperienceCoins = /* GraphQL */ `
  query SyncSimpleExperienceCoins(
    $filter: ModelSimpleExperienceCoinFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSimpleExperienceCoins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        value
        rng
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSimpleExperienceCoin = /* GraphQL */ `
  query GetSimpleExperienceCoin($id: ID!) {
    getSimpleExperienceCoin(id: $id) {
      id
      name
      description
      value
      rng
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listSimpleExperienceCoins = /* GraphQL */ `
  query ListSimpleExperienceCoins(
    $filter: ModelSimpleExperienceCoinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSimpleExperienceCoins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        value
        rng
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSimpleStats = /* GraphQL */ `
  query SyncSimpleStats(
    $filter: ModelSimpleStatsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSimpleStats(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        descriptio
        value
        simplenftID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSimpleStats = /* GraphQL */ `
  query GetSimpleStats($id: ID!) {
    getSimpleStats(id: $id) {
      id
      name
      descriptio
      value
      simplenftID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listSimpleStatss = /* GraphQL */ `
  query ListSimpleStatss(
    $filter: ModelSimpleStatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSimpleStatss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        descriptio
        value
        simplenftID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSimpleProperties = /* GraphQL */ `
  query SyncSimpleProperties(
    $filter: ModelSimplePropertiesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSimpleProperties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        value
        simplenftID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSimpleProperties = /* GraphQL */ `
  query GetSimpleProperties($id: ID!) {
    getSimpleProperties(id: $id) {
      id
      name
      description
      value
      simplenftID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listSimplePropertiess = /* GraphQL */ `
  query ListSimplePropertiess(
    $filter: ModelSimplePropertiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSimplePropertiess(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        value
        simplenftID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSimpleNFTS = /* GraphQL */ `
  query SyncSimpleNFTS(
    $filter: ModelSimpleNFTFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSimpleNFTS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ownerId
        externalLink
        name
        SimpleProperties {
          nextToken
          startedAt
        }
        SimpleStats {
          nextToken
          startedAt
        }
        descriptio
        supply
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSimpleNFT = /* GraphQL */ `
  query GetSimpleNFT($id: ID!) {
    getSimpleNFT(id: $id) {
      id
      ownerId
      externalLink
      name
      SimpleProperties {
        items {
          id
          name
          description
          value
          simplenftID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      SimpleStats {
        items {
          id
          name
          descriptio
          value
          simplenftID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      descriptio
      supply
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listSimpleNFTs = /* GraphQL */ `
  query ListSimpleNFTs(
    $filter: ModelSimpleNFTFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSimpleNFTs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ownerId
        externalLink
        name
        SimpleProperties {
          nextToken
          startedAt
        }
        SimpleStats {
          nextToken
          startedAt
        }
        descriptio
        supply
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        postOwnerId
        postOwnerUsername
        postTitle
        postBody
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      postOwnerId
      postOwnerUsername
      postTitle
      postBody
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postOwnerId
        postOwnerUsername
        postTitle
        postBody
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
