/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSimpleExperienceCoin = /* GraphQL */ `
  mutation CreateSimpleExperienceCoin(
    $input: CreateSimpleExperienceCoinInput!
    $condition: ModelSimpleExperienceCoinConditionInput
  ) {
    createSimpleExperienceCoin(input: $input, condition: $condition) {
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
export const updateSimpleExperienceCoin = /* GraphQL */ `
  mutation UpdateSimpleExperienceCoin(
    $input: UpdateSimpleExperienceCoinInput!
    $condition: ModelSimpleExperienceCoinConditionInput
  ) {
    updateSimpleExperienceCoin(input: $input, condition: $condition) {
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
export const deleteSimpleExperienceCoin = /* GraphQL */ `
  mutation DeleteSimpleExperienceCoin(
    $input: DeleteSimpleExperienceCoinInput!
    $condition: ModelSimpleExperienceCoinConditionInput
  ) {
    deleteSimpleExperienceCoin(input: $input, condition: $condition) {
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
export const createSimpleStats = /* GraphQL */ `
  mutation CreateSimpleStats(
    $input: CreateSimpleStatsInput!
    $condition: ModelSimpleStatsConditionInput
  ) {
    createSimpleStats(input: $input, condition: $condition) {
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
export const updateSimpleStats = /* GraphQL */ `
  mutation UpdateSimpleStats(
    $input: UpdateSimpleStatsInput!
    $condition: ModelSimpleStatsConditionInput
  ) {
    updateSimpleStats(input: $input, condition: $condition) {
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
export const deleteSimpleStats = /* GraphQL */ `
  mutation DeleteSimpleStats(
    $input: DeleteSimpleStatsInput!
    $condition: ModelSimpleStatsConditionInput
  ) {
    deleteSimpleStats(input: $input, condition: $condition) {
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
export const createSimpleProperties = /* GraphQL */ `
  mutation CreateSimpleProperties(
    $input: CreateSimplePropertiesInput!
    $condition: ModelSimplePropertiesConditionInput
  ) {
    createSimpleProperties(input: $input, condition: $condition) {
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
export const updateSimpleProperties = /* GraphQL */ `
  mutation UpdateSimpleProperties(
    $input: UpdateSimplePropertiesInput!
    $condition: ModelSimplePropertiesConditionInput
  ) {
    updateSimpleProperties(input: $input, condition: $condition) {
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
export const deleteSimpleProperties = /* GraphQL */ `
  mutation DeleteSimpleProperties(
    $input: DeleteSimplePropertiesInput!
    $condition: ModelSimplePropertiesConditionInput
  ) {
    deleteSimpleProperties(input: $input, condition: $condition) {
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
export const createSimpleNFT = /* GraphQL */ `
  mutation CreateSimpleNFT(
    $input: CreateSimpleNFTInput!
    $condition: ModelSimpleNFTConditionInput
  ) {
    createSimpleNFT(input: $input, condition: $condition) {
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
export const updateSimpleNFT = /* GraphQL */ `
  mutation UpdateSimpleNFT(
    $input: UpdateSimpleNFTInput!
    $condition: ModelSimpleNFTConditionInput
  ) {
    updateSimpleNFT(input: $input, condition: $condition) {
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
export const deleteSimpleNFT = /* GraphQL */ `
  mutation DeleteSimpleNFT(
    $input: DeleteSimpleNFTInput!
    $condition: ModelSimpleNFTConditionInput
  ) {
    deleteSimpleNFT(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
