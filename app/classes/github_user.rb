class GithubUser
  attr_reader :username,
    :bio,
    :blog,
    :company,
    :location,
    :html_url,
    :followers,
    :following,
    :avatar_url,
    :public_repos,
    :twitter_username

  def initialize(username)
    response = Services::Github.request(username)

    @bio              = response["bio"]
    @blog             = response["blog"]
    @username         = response["login"]
    @company          = response["company"]
    @location         = response["location"]
    @html_url         = response["html_url"]
    @followers        = response["followers"]
    @following        = response["following"]
    @avatar_url       = response["avatar_url"]
    @public_repos     = response["public_repos"]
    @twitter_username = response["twitter_username"]
  end

  def exist?
    !@username.nil?
  end
end