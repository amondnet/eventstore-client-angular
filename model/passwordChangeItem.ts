/**
 * HTTP API
 * The HTTP API for Event Store
 *
 * OpenAPI spec version: 4.1.1
 * Contact: chris.ward@eventstore.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface PasswordChangeItem { 
    /**
     * The current password for the user
     */
    CurrentPassword?: string;
    /**
     * The new password for the user
     */
    NewPassword?: string;
}
