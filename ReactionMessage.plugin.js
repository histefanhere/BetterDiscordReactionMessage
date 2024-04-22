/**
 * @name ReactionMessage
 * @author Histefanhere
 * @description Transform a message into reactions
 * @authorId 299087607948902401
 * @authorLink https://github.com/histefanhere
 * @source https://github.com/histefanhere/BetterDiscordReactionMessage
 * @version 0.0.1
 */

module.exports = class ReactionMessage {
  start() {
    // Called when the plugin is activated (including after reloads)
    BdApi.alert("Hello World!", "This is my first plugin!");
  } 

  stop() {
    // Called when the plugin is deactivated
  }
}
