/**
* Copyright (c) 2015-present, Facebook, Inc. All rights reserved.
*
* You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
* copy, modify, and distribute this software in source code or binary form for use
* in connection with the web services and APIs provided by Facebook.
*
* As with any software that integrates with the Facebook platform, your use of
* this software is subject to the Facebook Developer Principles and Policies
* [http://developers.facebook.com/policy/]. This copyright notice shall be
* included in all copies or substantial portions of the software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
* @providesModule FBSDKAppInviteContent
* @flow
*/

'use strict';

/**
 * A model for app invites.
 */
class FBSDKAppInviteContent {
  /**
   * A URL to a preview image that will be displayed with the app invite.
   * This is optional. If you don't include it, a fallback image will be used.
   */
  appInvitePreviewImageURL: string;

  /**
   * An app link target that will be used as a target when the user accepts the invite.
   */
  appLinkURL: string;

  /**
   * Constructs a new app invite content object.
   *
   * @param (string) appLinkURL - An app link target that will be used as a target when the user accepts the invite.
   * @param (string) appInvitePreviewImageURL - A URL to a preview image that will be displayed with the app invite.
   */
  constructor(appLinkURL: string, appInvitePreviewImageURL: string) {
    this.appInvitePreviewImageURL = appInvitePreviewImageURL;
    this.appLinkURL = appLinkURL;
  }
}

module.exports = FBSDKAppInviteContent;
