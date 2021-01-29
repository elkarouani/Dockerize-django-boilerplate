class HelloWorld extends React.Component {
    render() {
        return <h1 {...this.props}>
            Hello {this.props.frameworkName} world !!
        </h1>
    }
}

class Content extends React.Component {
    getUrl() {
        return 'http://webapplog.com'
    }

    render() {
        return (
            <div>
                <p>Your REST API URL is:
                    <a href={this.getUrl()}>
                        {this.getUrl()}
                    </a>
                </p>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        {/* Just like a JS comment */}
        <HelloWorld
            id='ember'
            className='small_text'
            frameworkName='Ember.js'
            title='A framework for creating ambitious web applications.' />
        <HelloWorld
            id='backbone'
            frameworkName='Backbone.js'
            title='Backbone.js gives structure to web applications...' />
        <HelloWorld
            id='angular'
            frameworkName='Angular.js'
            title='Superheroic JavaScript MVW Framework' />
        <Content/>
    </div>,
    document.getElementById('content')
)