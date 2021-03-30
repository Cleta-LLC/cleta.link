import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class SimpleExperienceCoin {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly value: number;
  readonly rng: boolean;
  constructor(init: ModelInit<SimpleExperienceCoin>);
  static copyOf(source: SimpleExperienceCoin, mutator: (draft: MutableModel<SimpleExperienceCoin>) => MutableModel<SimpleExperienceCoin> | void): SimpleExperienceCoin;
}

export declare class SimpleStats {
  readonly id: string;
  readonly name: string;
  readonly descriptio: string;
  readonly value: number;
  readonly simplenftID?: string;
  constructor(init: ModelInit<SimpleStats>);
  static copyOf(source: SimpleStats, mutator: (draft: MutableModel<SimpleStats>) => MutableModel<SimpleStats> | void): SimpleStats;
}

export declare class SimpleProperties {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly value: string;
  readonly simplenftID?: string;
  constructor(init: ModelInit<SimpleProperties>);
  static copyOf(source: SimpleProperties, mutator: (draft: MutableModel<SimpleProperties>) => MutableModel<SimpleProperties> | void): SimpleProperties;
}

export declare class SimpleNFT {
  readonly id: string;
  readonly ownerId: string;
  readonly externalLink?: string;
  readonly name: string;
  readonly SimpleProperties?: (SimpleProperties | null)[];
  readonly SimpleStats?: (SimpleStats | null)[];
  readonly descriptio?: string;
  readonly supply: number;
  constructor(init: ModelInit<SimpleNFT>);
  static copyOf(source: SimpleNFT, mutator: (draft: MutableModel<SimpleNFT>) => MutableModel<SimpleNFT> | void): SimpleNFT;
}

export declare class Post {
  readonly id: string;
  readonly postOwnerId: string;
  readonly postOwnerUsername: string;
  readonly postTitle: string;
  readonly postBody: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}