function saveChanges() {
    var conversationId = document.getElementById('group_identifier').value;
    if (!conversationId) {
        alert('Error: No value specified');
        return;
    }
    if (conversationId.indexOf('@thread.skype') === -1) {
        alert('Error: Conversation ID must contains "@thread.skype"');
        return;
    }
    chrome.storage.sync.set({'group_identifier': conversationId}, function() {
        alert('Settings saved');
    });
}

document.getElementById('saveSetting').addEventListener('click', function () {
   saveChanges();
});

chrome.storage.sync.get('group_identifier', function (group) {
    if(group.hasOwnProperty('group_identifier')) {
        document.getElementById('group_identifier').value = group.group_identifier;
    }
});