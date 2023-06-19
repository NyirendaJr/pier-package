<script>
    window._htmlToElements = function(html) {
        var template = document.createElement('template');
        template.innerHTML = html;

        const nodes = template.content.childNodes,
            nodesArray = [],
            scriptsArray = [];
        for (var i in nodes) {
            if (nodes[i].nodeType == 1) { // get rid of the whitespace text nodes
                if (nodes[i].nodeName === 'SCRIPT') {
                    scriptsArray.push(nodes[i]);
                } else {
                    nodesArray.push(nodes[i]);
                }
            }
        }
        return nodesArray.concat(scriptsArray);
    }

    window._loadPierContent = function(data, index, container, appendData) {
        if (index === 0 && !appendData)
            container.innerHTML = '';

        if (index <= data.length) {
            var element = data[index];
            if (element !== undefined && element.nodeName === 'SCRIPT') {
                // output scripts
                var script = document.createElement('script');
                // copy type
                if (element.type) {
                    script.type = element.type;
                }
                // clone attributes
                Array.prototype.forEach.call(element.attributes, function(attr) {
                    script.setAttribute(attr.nodeName, attr.nodeValue);
                });
                if (element.src != '') {
                    script.src = element.src;
                    script.onload = function() {
                        _loadPierContent(data, index + 1, container);
                    };
                    document.head.appendChild(script);
                } else {
                    script.text = element.text;
                    document.body.appendChild(script);
                    _loadPierContent(data, index + 1, container);
                }
            } else {
                if (element !== undefined)
                    container.appendChild(element);

                _loadPierContent(data, index + 1, container);
            }
        } else {
            return true;
        }
    };

    window.loadPierSectionContent = async function(sectionSelector, {
        url,
    } = {}) {
        if (!url) return;

        const res = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const data = await res.text();

        return _loadPierContent(_htmlToElements(data), 0, document.querySelector(sectionSelector), false);
    }
</script>
