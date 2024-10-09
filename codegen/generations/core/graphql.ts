/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: 'CreateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateOrdersMutationResponse = {
  __typename?: 'CreateOrdersMutationResponse';
  info: CreateInfo;
  orders: Array<Order>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: CreateInfo;
  users: Array<User>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrders: CreateOrdersMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteOrders: DeleteInfo;
  deleteUsers: DeleteInfo;
  updateOrders: UpdateOrdersMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};


export type MutationCreateOrdersArgs = {
  input: Array<OrderCreateInput>;
};


export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};


export type MutationDeleteOrdersArgs = {
  delete?: InputMaybe<OrderDeleteInput>;
  where?: InputMaybe<OrderWhere>;
};


export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserWhere>;
};


export type MutationUpdateOrdersArgs = {
  connect?: InputMaybe<OrderConnectInput>;
  create?: InputMaybe<OrderRelationInput>;
  delete?: InputMaybe<OrderDeleteInput>;
  disconnect?: InputMaybe<OrderDisconnectInput>;
  update?: InputMaybe<OrderUpdateInput>;
  where?: InputMaybe<OrderWhere>;
};


export type MutationUpdateUsersArgs = {
  connect?: InputMaybe<UserConnectInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};

export type Order = {
  __typename?: 'Order';
  orderType: Scalars['String']['output'];
  users: Array<User>;
  usersAggregate?: Maybe<OrderUserUsersAggregationSelection>;
  usersConnection: OrderUsersConnection;
};


export type OrderUsersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type OrderUsersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type OrderUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<OrderUsersConnectionSort>>;
  where?: InputMaybe<OrderUsersConnectionWhere>;
};

export type OrderAggregateSelection = {
  __typename?: 'OrderAggregateSelection';
  count: Scalars['Int']['output'];
  orderType: StringAggregateSelection;
};

export type OrderConnectInput = {
  users?: InputMaybe<Array<OrderUsersConnectFieldInput>>;
};

export type OrderConnectWhere = {
  node: OrderWhere;
};

export type OrderCreateInput = {
  orderType: Scalars['String']['input'];
  users?: InputMaybe<OrderUsersFieldInput>;
};

export type OrderDeleteInput = {
  users?: InputMaybe<Array<OrderUsersDeleteFieldInput>>;
};

export type OrderDisconnectInput = {
  users?: InputMaybe<Array<OrderUsersDisconnectFieldInput>>;
};

export type OrderEdge = {
  __typename?: 'OrderEdge';
  cursor: Scalars['String']['output'];
  node: Order;
};

export type OrderOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more OrderSort objects to sort Orders by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<OrderSort>>;
};

export type OrderRelationInput = {
  users?: InputMaybe<Array<OrderUsersCreateFieldInput>>;
};

/** Fields to sort Orders by. The order in which sorts are applied is not guaranteed when specifying many fields in one OrderSort object. */
export type OrderSort = {
  orderType?: InputMaybe<SortDirection>;
};

export type OrderUpdateInput = {
  orderType?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<OrderUsersUpdateFieldInput>>;
};

export type OrderUserUsersAggregationSelection = {
  __typename?: 'OrderUserUsersAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<OrderUserUsersNodeAggregateSelection>;
};

export type OrderUserUsersNodeAggregateSelection = {
  __typename?: 'OrderUserUsersNodeAggregateSelection';
  firstName: StringAggregateSelection;
  lastName: StringAggregateSelection;
};

export type OrderUsersAggregateInput = {
  AND?: InputMaybe<Array<OrderUsersAggregateInput>>;
  NOT?: InputMaybe<OrderUsersAggregateInput>;
  OR?: InputMaybe<Array<OrderUsersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<OrderUsersNodeAggregationWhereInput>;
};

export type OrderUsersConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type OrderUsersConnection = {
  __typename?: 'OrderUsersConnection';
  edges: Array<OrderUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrderUsersConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type OrderUsersConnectionWhere = {
  AND?: InputMaybe<Array<OrderUsersConnectionWhere>>;
  NOT?: InputMaybe<OrderUsersConnectionWhere>;
  OR?: InputMaybe<Array<OrderUsersConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type OrderUsersCreateFieldInput = {
  node: UserCreateInput;
};

export type OrderUsersDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<OrderUsersConnectionWhere>;
};

export type OrderUsersDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<OrderUsersConnectionWhere>;
};

export type OrderUsersFieldInput = {
  connect?: InputMaybe<Array<OrderUsersConnectFieldInput>>;
  create?: InputMaybe<Array<OrderUsersCreateFieldInput>>;
};

export type OrderUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrderUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<OrderUsersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<OrderUsersNodeAggregationWhereInput>>;
  firstName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  firstName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  lastName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderUsersRelationship = {
  __typename?: 'OrderUsersRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type OrderUsersUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type OrderUsersUpdateFieldInput = {
  connect?: InputMaybe<Array<OrderUsersConnectFieldInput>>;
  create?: InputMaybe<Array<OrderUsersCreateFieldInput>>;
  delete?: InputMaybe<Array<OrderUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrderUsersDisconnectFieldInput>>;
  update?: InputMaybe<OrderUsersUpdateConnectionInput>;
  where?: InputMaybe<OrderUsersConnectionWhere>;
};

export type OrderWhere = {
  AND?: InputMaybe<Array<OrderWhere>>;
  NOT?: InputMaybe<OrderWhere>;
  OR?: InputMaybe<Array<OrderWhere>>;
  orderType?: InputMaybe<Scalars['String']['input']>;
  orderType_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  orderType_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  orderType_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  orderType_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  usersAggregate?: InputMaybe<OrderUsersAggregateInput>;
  /** Return Orders where all of the related OrderUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<OrderUsersConnectionWhere>;
  /** Return Orders where none of the related OrderUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<OrderUsersConnectionWhere>;
  /** Return Orders where one of the related OrderUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<OrderUsersConnectionWhere>;
  /** Return Orders where some of the related OrderUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<OrderUsersConnectionWhere>;
  /** Return Orders where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return Orders where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return Orders where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return Orders where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
};

export type OrdersConnection = {
  __typename?: 'OrdersConnection';
  edges: Array<OrderEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  orders: Array<Order>;
  ordersAggregate: OrderAggregateSelection;
  ordersConnection: OrdersConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
};


export type QueryOrdersArgs = {
  options?: InputMaybe<OrderOptions>;
  where?: InputMaybe<OrderWhere>;
};


export type QueryOrdersAggregateArgs = {
  where?: InputMaybe<OrderWhere>;
};


export type QueryOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<OrderSort>>>;
  where?: InputMaybe<OrderWhere>;
};


export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  where?: InputMaybe<UserWhere>;
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelection = {
  __typename?: 'StringAggregateSelection';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateOrdersMutationResponse = {
  __typename?: 'UpdateOrdersMutationResponse';
  info: UpdateInfo;
  orders: Array<Order>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  orders: Array<Order>;
  ordersAggregate?: Maybe<UserOrderOrdersAggregationSelection>;
  ordersConnection: UserOrdersConnection;
};


export type UserOrdersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<OrderOptions>;
  where?: InputMaybe<OrderWhere>;
};


export type UserOrdersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrderWhere>;
};


export type UserOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserOrdersConnectionSort>>;
  where?: InputMaybe<UserOrdersConnectionWhere>;
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  count: Scalars['Int']['output'];
  firstName: StringAggregateSelection;
  lastName: StringAggregateSelection;
};

export type UserConnectInput = {
  orders?: InputMaybe<Array<UserOrdersConnectFieldInput>>;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  orders?: InputMaybe<UserOrdersFieldInput>;
};

export type UserDeleteInput = {
  orders?: InputMaybe<Array<UserOrdersDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  orders?: InputMaybe<Array<UserOrdersDisconnectFieldInput>>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserOrderOrdersAggregationSelection = {
  __typename?: 'UserOrderOrdersAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserOrderOrdersNodeAggregateSelection>;
};

export type UserOrderOrdersNodeAggregateSelection = {
  __typename?: 'UserOrderOrdersNodeAggregateSelection';
  orderType: StringAggregateSelection;
};

export type UserOrdersAggregateInput = {
  AND?: InputMaybe<Array<UserOrdersAggregateInput>>;
  NOT?: InputMaybe<UserOrdersAggregateInput>;
  OR?: InputMaybe<Array<UserOrdersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserOrdersNodeAggregationWhereInput>;
};

export type UserOrdersConnectFieldInput = {
  connect?: InputMaybe<Array<OrderConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<OrderConnectWhere>;
};

export type UserOrdersConnection = {
  __typename?: 'UserOrdersConnection';
  edges: Array<UserOrdersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserOrdersConnectionSort = {
  node?: InputMaybe<OrderSort>;
};

export type UserOrdersConnectionWhere = {
  AND?: InputMaybe<Array<UserOrdersConnectionWhere>>;
  NOT?: InputMaybe<UserOrdersConnectionWhere>;
  OR?: InputMaybe<Array<UserOrdersConnectionWhere>>;
  node?: InputMaybe<OrderWhere>;
};

export type UserOrdersCreateFieldInput = {
  node: OrderCreateInput;
};

export type UserOrdersDeleteFieldInput = {
  delete?: InputMaybe<OrderDeleteInput>;
  where?: InputMaybe<UserOrdersConnectionWhere>;
};

export type UserOrdersDisconnectFieldInput = {
  disconnect?: InputMaybe<OrderDisconnectInput>;
  where?: InputMaybe<UserOrdersConnectionWhere>;
};

export type UserOrdersFieldInput = {
  connect?: InputMaybe<Array<UserOrdersConnectFieldInput>>;
  create?: InputMaybe<Array<UserOrdersCreateFieldInput>>;
};

export type UserOrdersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserOrdersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserOrdersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserOrdersNodeAggregationWhereInput>>;
  orderType_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  orderType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  orderType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  orderType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  orderType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  orderType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  orderType_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  orderType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  orderType_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  orderType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  orderType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  orderType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  orderType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  orderType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  orderType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type UserOrdersRelationship = {
  __typename?: 'UserOrdersRelationship';
  cursor: Scalars['String']['output'];
  node: Order;
};

export type UserOrdersUpdateConnectionInput = {
  node?: InputMaybe<OrderUpdateInput>;
};

export type UserOrdersUpdateFieldInput = {
  connect?: InputMaybe<Array<UserOrdersConnectFieldInput>>;
  create?: InputMaybe<Array<UserOrdersCreateFieldInput>>;
  delete?: InputMaybe<Array<UserOrdersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserOrdersDisconnectFieldInput>>;
  update?: InputMaybe<UserOrdersUpdateConnectionInput>;
  where?: InputMaybe<UserOrdersConnectionWhere>;
};

export type UserRelationInput = {
  orders?: InputMaybe<Array<UserOrdersCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  firstName?: InputMaybe<SortDirection>;
  lastName?: InputMaybe<SortDirection>;
};

export type UserUpdateInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Array<UserOrdersUpdateFieldInput>>;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  OR?: InputMaybe<Array<UserWhere>>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  firstName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  firstName_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  firstName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  lastName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  lastName_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  lastName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  ordersAggregate?: InputMaybe<UserOrdersAggregateInput>;
  /** Return Users where all of the related UserOrdersConnections match this filter */
  ordersConnection_ALL?: InputMaybe<UserOrdersConnectionWhere>;
  /** Return Users where none of the related UserOrdersConnections match this filter */
  ordersConnection_NONE?: InputMaybe<UserOrdersConnectionWhere>;
  /** Return Users where one of the related UserOrdersConnections match this filter */
  ordersConnection_SINGLE?: InputMaybe<UserOrdersConnectionWhere>;
  /** Return Users where some of the related UserOrdersConnections match this filter */
  ordersConnection_SOME?: InputMaybe<UserOrdersConnectionWhere>;
  /** Return Users where all of the related Orders match this filter */
  orders_ALL?: InputMaybe<OrderWhere>;
  /** Return Users where none of the related Orders match this filter */
  orders_NONE?: InputMaybe<OrderWhere>;
  /** Return Users where one of the related Orders match this filter */
  orders_SINGLE?: InputMaybe<OrderWhere>;
  /** Return Users where some of the related Orders match this filter */
  orders_SOME?: InputMaybe<OrderWhere>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Get_Users_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_Users_QueryQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', firstName: string, lastName: string }> };


export const Get_Users_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_USERS_QUERY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<Get_Users_QueryQuery, Get_Users_QueryQueryVariables>;