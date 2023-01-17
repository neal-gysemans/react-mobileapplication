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