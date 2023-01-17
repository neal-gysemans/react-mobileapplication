import { gql } from "@apollo/client";


export const GET_WORKERS = gql`
query GET_WORKERS {
    worker {
      name
      email
      phonenumber
    }
  }`;

export const GET_WORKERS_FROM_FARM = gql`
query GET_WORKERS_FROM_FARM($farmId: Int!) {
  farmStaff(where: {farmId: {_eq: $farmId}}) {
    worker {
      id 
      name
    }
  }
}`;

export const GET_FIELDOWNER_FARMS = gql`
query GET_FIELDOWNER_FARMS($farmId: Int!) {
  farm(where: {id: {_eq: $farmId}}) {
    id
    name
    startdate
  }
}`;

export const GET_WORKER_DETAILS = gql`
query GET_WORKER_DETAILS($id: Int!) {
  worker(where: {id: {_eq: $id}}) {
    id
    name
    language
    phonenumber
    city
    country
    email
  }
}`;

export const GET_FARM_DETAILS = gql`
query GET_FARM_DETAILS($id: Int!) {
  farm(where: {id: {_eq: $id}}) {
    id
    name
    startdate
    fields {
      id
      name
    }
  }
}`;

export const GET_FIELD = gql`
query GET_FIELD($id: Int!) {
  field(where: {id: {_eq: $id}}) {
    id
    name
  }
}`;